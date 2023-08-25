Overview : 

      1. The app includes a contact management.
      2. The app includes a COVID_19 Dashboard.

      
Contact Management :

      1. To add a new contact, click the "Add Contact" button and fill in the required information in the form.
      2. The contact list displays all added contacts on the home page in the table format. Each contact has buttons edit and delete.
      3. The "Edit" button allows you to modify contact details, and the "Delete" button removes the contact.


COVID_19 Dashboard :

      1. API Endpoints : 
      
             A. Worldwide Data: https://disease.sh/v3/covid-19/all :
                     This endpoint provides global COVID-19 statistics including total cases, recovered cases, deaths, and more.
                     
             B. Country-Specific Data: https://disease.sh/v3/covid-19/countries :
                      This endpoint offers COVID-19 data for individual countries. It includes details such as total cases, total deaths
                  and total recovered cases. 
                      
             C. Graph Data: https://disease.sh/v3/covid-19/historical/all?lastdays=all :
                      This endpoint provides historical COVID-19 data for plotting graphs. It includes cases, deaths, and recovered cases                     data with date information.
                      {But the line graph is not worlking!!!!}


Run The App :

         1. terminal : npm start

            You can now view in the browser :
             Local:            http://localhost:3000
             On Your Network:  http://172.20.10.5:3000

             
