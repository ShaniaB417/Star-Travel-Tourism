document.addEventListener('DOMContentLoaded', function () {
    const tripForm = document.getElementById('tripForm');
    const summaryDiv = document.getElementById('summary');
    const summaryName = document.getElementById('summaryName');
    const summaryPlanet = document.getElementById('summaryPlanet');
    const summarySpaceCraft = document.getElementById('summarySpaceCraft');
    const summaryDepartureTime = document.getElementById('summaryDepartureTime');
    const summaryArrivalTime = document.getElementById('summaryArrivalTime');
    const summarySpecialRequests = document.getElementById('summarySpecialRequests');
    const summaryAttractions = document.getElementById('summaryAttractions');
  
    tripForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get form values
      const name = document.getElementById('name').value;
      const planet = document.getElementById('planet').value;
      const spaceCraft = document.getElementById('SpaceCraft').value;
      const departureTime = document.getElementById('departureTime').value;
      const arrivalTime = document.getElementById('arrivalTime').value;
      const specialRequests = document.getElementById('specialRequests').value;
      const attractions = Array.from(document.getElementById('attractions').selectedOptions)
        .map(option => option.value);
  
      // Update the summary
      summaryName.textContent = name;
      summaryPlanet.textContent = planet === '-Select-' ? 'Not selected' : planet;
      summarySpaceCraft.textContent = spaceCraft === '-Select-' ? 'Not selected' : spaceCraft;
      summaryDepartureTime.textContent = departureTime === '-Select-' ? 'Not selected' : departureTime;
      summaryArrivalTime.textContent = arrivalTime === '-Select-' ? 'Not selected' : arrivalTime;
      summarySpecialRequests.textContent = specialRequests || 'None';
      summaryAttractions.textContent = attractions.length === 0 ? 'None' : attractions.join(', ');
  
      // Show the summary
      summaryDiv.style.display = 'block';
    });
  });
  