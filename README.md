Flatdango - Movie Ticket Booking App
Flatdango is a simple web application that allows users to purchase movie tickets from Flatiron Movie Theater. It fetches movie details from a local server running JSON DB server.

Flatdango Screenshot

Features
See the first movie's details, including its poster, title, runtime, showtime, and available tickets when the page loads.
See a menu of all movies on the left side of the page.
Buy a ticket for a movie (No persistence needed for this feature).
Click on a movie in the menu to replace the currently displayed movie's details with the new movie's details.
Technologies Used
HTML5
CSS3
JavaScript
JSON Server (for the local server)
Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/flatdango.git
Navigate to the project folder:

bash
Copy code
cd flatdango
Start the JSON DB server:

bash
Copy code
json-server --watch db.json
Open the index.html file in your web browser to use the app.

Usage
When you open the app, you will see details of the first movie on the right side and a list of available movies on the left side.
Click on a movie in the list to view its details.
To purchase a ticket, click the "Buy Ticket" button. The number of available tickets will decrease, and if all tickets are sold out, the button will change to "Sold Out."
Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the project.
Create a new branch for your feature: git checkout -b feature/your-feature-name
Commit your changes: git commit -m "Added a new feature"
Push to your branch: git push origin feature/your-feature-name
Create a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
This project was inspired by the Flatiron School's software engineering curriculum.
Contact
If you have any questions or suggestions, feel free to contact us at  khalid.mohamed@student.moringaschool.com