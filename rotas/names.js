const express = require ('express');
const router = express.Router();

router.get('/names', (req, res)=>{
    res.json({
        "employee": [
            {
              "id": 200,
              "name": "Jean",
              "start_day": "01/16/2017",
              "position": "Young Apprendice",
              "manager": "abelc@br.ibm.com",
              "site": "Pasteur",
              "cellphone": "",
              "url_git": "Jean",
              "end_day": ""
            },
            {
              "id": 201,
              "name": "João",
              "start_day": "03/14/2016",
              "position": "Analyst",
              "manager": "abelc@br.ibm.com",
              "site": "Pasteur",
              "cellphone": "dd",
              "url_git": "www.google.com.br",
              "end_day": "dd"
            },
            {
              "id": 203,
              "name": "Leticia",
              "start_day": "11/26/2016",
              "position": "Web Developer",
              "manager": "abelc@br.ibm.com",
              "site": "Pasteur",
              "cellphone": "21212",
              "url_git": "www.google.com.br",
              "end_day": "06/15/2018"
            },
            {
              "id": 204,
              "name": "Pedro",
              "start_day": "11/26/2016",
              "position": "Web Developer",
              "manager": "abelc@br.ibm.com",
              "site": "Pasteur",
              "cellphone": "(55 21) 96503-4468",
              "url_git": "www.google.com.br",
              "end_day": "06/15/2018"
            },
            {
              "id": 205,
              "name": "Ricardo",
              "start_day": "11/25/2015",
              "position": "Web Desginer",
              "manager": "abelc@br.ibm.com",
              "site": "Pasteur",
              "cellphone": "(55 21) 96503-4468",
              "url_git": "m",
              "end_day": "06/15/2018"
            },
            {
              "id": 206,
              "name": "Tamyres",
              "start_day": "03/19/2016",
              "position": "Desginer",
              "manager": "abelc@br.ibm.com",
              "site": "Pasteur",
              "cellphone": "kuhggjh",
              "url_git": "https://github.com/jcsouz10",
              "end_day": "06/15/2018"
            },
            {
              "id": 207,
              "name": "Gabriela",
              "start_day": "03/30/2017",
              "position": "Young Apprendice",
              "manager": "abelc@br.ibm.com",
              "site": "Pasteur",
              "cellphone": "(55 21) 96503-4468",
              "url_git": "https://github.com/jcsouz10",
              "end_day": "06/15/2018"
            },
            {
              "id": 208,
              "name": "Bruna",
              "start_day": "11/19/2017",
              "position": "Desginer",
              "manager": "abelc@br.ibm.com",
              "site": "Pasteur",
              "cellphone": "(55 21) 96503-4468",
              "url_git": "https://github.com/jcsouz10",
              "end_day": "06/15/2018"
            },
            {
              "id": 209,
              "name": "Joel",
              "start_day": "01/05/2014",
              "position": "Manager",
              "manager": "abelc@br.ibm.com",
              "site": "Pasteur",
              "cellphone": "(55 21) 96503-4468",
              "url_git": "https://github.com/jcsouz10",
              "end_day": "06/15/2018"
            }
          ]
    })
})

module.exports = router;