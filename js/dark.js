
     document.querySelector('#sun').onclick = () => {
         document.querySelector('.info_box').classList.add('dark');
         document.querySelector('#sun').style.display = 'none';
         document.querySelector('#moon').style.display = 'block';
     }
     document.querySelector('#moon').onclick = () => {
         document.querySelector('.info_box').classList.remove('dark');
         document.querySelector('#sun').style.display = 'block';
         document.querySelector('#moon').style.display = 'none';
     }
