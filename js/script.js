AOS.init();
const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

 

// function loadScript(){



//     let chatIcon =  document.getElementById('chat-icon');
// }

// document.addEventListener('DOMContentLoaded', loadScript)