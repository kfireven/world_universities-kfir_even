export function searchUniversityByNameAPI (name) {
    return fetch('https://cors-anywhere.herokuapp.com/http://universities.hipolabs.com/search?name=' + name)
      .then((response) => { 
          return response.json().then((data) => {
              return data;
          }).catch((err) => {
              console.log(err);
          }) 
      });
  };

export function initalhUniversityList () {
    return [
        {
          "domains": [
            "redcross.ac.jp"
          ],
          "web_pages": [
            "http://www.redcross.ac.jp/"
          ],
          "name": "Japanese Red Cross College",
          "alpha_two_code": "JP",
          "state-province": null,
          "country": "Japan"
        },
        {
          "domains": [
            "uor.edu"
          ],
          "web_pages": [
            "http://www.uor.edu/"
          ],
          "name": "University of Redlands",
          "alpha_two_code": "US",
          "state-province": null,
          "country": "United States"
        },
        {
          "domains": [
            "redlandscc.edu"
          ],
          "web_pages": [
            "http://www.redlandscc.edu"
          ],
          "name": "Redlands Community College",
          "alpha_two_code": "US",
          "state-province": null,
          "country": "United States"
        },
        {
          "domains": [
            "uor.edu"
          ],
          "web_pages": [
            "http://www.uor.edu/"
          ],
          "name": "University of Redlands",
          "alpha_two_code": "US",
          "state-province": null,
          "country": "United States"
        },
        {
          "domains": [
            "rrcc.edu"
          ],
          "web_pages": [
            "http://www.rrcc.edu"
          ],
          "name": "Red Rocks Community College",
          "alpha_two_code": "US",
          "state-province": null,
          "country": "United States"
        },
        {
          "domains": [
            "rsu.edu.sd"
          ],
          "web_pages": [
            "http://www.rsu.edu.sd/"
          ],
          "name": "Red Sea University",
          "alpha_two_code": "SD",
          "state-province": null,
          "country": "Sudan"
        },
        {
          "domains": [
            "redwoods.edu"
          ],
          "web_pages": [
            "http://www.redwoods.edu"
          ],
          "name": "College of the Redwoods",
          "alpha_two_code": "US",
          "state-province": null,
          "country": "United States"
        },
        {
          "domains": [
            "redwoods.edu"
          ],
          "web_pages": [
            "http://www.redwoods.edu"
          ],
          "name": "College of the Redwoods",
          "alpha_two_code": "US",
          "state-province": null,
          "country": "United States"
        },
        {
          "domains": [
            "redeemer.ca"
          ],
          "web_pages": [
            "http://www.redeemer.ca/"
          ],
          "name": "Redeemer College",
          "alpha_two_code": "CA",
          "state-province": null,
          "country": "Canada"
        },
        {
          "domains": [
            "run.edu.ng"
          ],
          "web_pages": [
            "http://www.run.edu.ng/"
          ],
          "name": "Redeemers University",
          "alpha_two_code": "NG",
          "state-province": null,
          "country": "Nigeria"
        }
      ]
}