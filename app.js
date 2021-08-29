function getUser() {
	fetch('https://randomuser.me/api/')
	.then(response => response.json())
	.then(data => makeBio(data))
}

function makeBio(data) {
	const user = data.results[0];
	const name = `${user.name.title} ${user.name.first} ${user.name.last}` ;
	console.log(user);
	const users = document.getElementById('user');
	users.innerHTML = `
	<div class="col mx-auto">
          <div class="card h-100">
            <img src="${user.picture.large}" height="250px" width="250px" class="mx-auto mt-2 rounded-circle" alt="...">
            <div class="card-body">
              <h5 class="card-title">${name} <small>${user.dob.age}</small> </h5>
              <p class="card-text fs-6">
			  <i>${user.location.city}, ${user.location.state}, ${user.location.country}</i>
			  <p>Email: ${user.email} </p>
			  <p>Phone: +${user.phone} </p>
			  </p>
            </div>
          </div>
        </div>
	`
}
