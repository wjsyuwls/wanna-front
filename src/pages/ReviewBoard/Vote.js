import apis from '../../apis';
import * as Swal from 'sweetalert2';

// vote f
export default async function vote(id, _a_d, review) {
  console.log(review);
  if (typeof window.klaytn !== 'undefined') {
    const provider = window['klaytn'];
  }
  try {
    const accounts = await window.klaytn.enable();
    const account = accounts[0];
    // token > 10
    const balance = await apis.get(`/api/review/vote/balance/${account}`);
    if (!balance.data.enough) {
      Swal.fire({
        icon: 'error',
        title: 'Oops... 토큰이 부족합니다!',
      });
      return;
    }
    // check vote
    const check = await apis.get(`/api/review/vote/check/${id}/${account}`);
    if (!check.data.end) {
      console.log('vote end not yet');
      if (check.data.existed) {
        Swal.fire({
          icon: 'error',
          title: 'Oops... 이미 투표하셨습니다!',
        });
        return;
      } else {
        console.log(check.data.message);
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops... 투표가 마감되었습니다!',
      });
      return;
    }

    // instead temporarily klay send
    // await caver.klay.sendTransaction({
    //   from: account,
    //   to: '0xe171f3efdf39514412156faf4bdf003202ec2218',
    //   gas: 2000000,
    //   value: caver.utils.toPeb('1', 'KLAY'),
    // });

    let timerInterval;
    Swal.fire({
      title: '투표중',
      html: '<b></b>',
      timer: 2000,
      timerProgressBar: true,
      didOpen: async () => {
        Swal.showLoading();

        const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);

        // pay 10 token
        await apis.post('/api/review/vote/transfer', { address: account });

        // vote
        const body = {
          id: id,
          _a_d: _a_d,
          address: account,
        };
        await apis.post('/api/review/vote', body);

        // check vote progress
        const progress = await apis.get(`/api/review/vote/progress/${id}`);

        // count = 11 vote end
        // test count = 3
        if (parseInt(progress.data.Count) === 3) {
          // pay reward
          const result = await apis.get(`/api/review/vote/reward/${id}`);

          if (result.data.verify) {
            const body = {
              id: id,
              writer: review.address,
              place: review.place_name,
              title: review.title,
              content: review.content,
              img: review.img,
              score: review.score,
            };
            await apis.post('/api/review/vote/verify', body).then((receipt) => {
              console.log(receipt.data.message);
            });
          }
        }
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
        Swal.fire('투표 완료!', '', 'success').then(() => {
          location.reload();
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
}
