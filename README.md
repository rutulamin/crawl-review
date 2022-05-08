# crawl-review

## System Requirements
- Node.js latest version (16.15.0)

## Installation

Install the dependencies and start the server.

```sh
cd crawl-review
npm i
npm start
```

## Example
```sh
reviewPageURL = "https://www.tigerdirect.com/applications/SearchTools/item-details.asp?EdpNo=640254&CatId=3839"

Request: curl --location --request GET 'http://localhost:3000/crawl/review?reviewPageURL=https://www.tigerdirect.com/applications/SearchTools/item-details.asp?EdpNo=640254%26CatId=3839'

Response: 
{
    "data": {
        "data": [
            {
                "name": "RISHABH",
                "date": "Aug 20, 2021",
                "ratings": "4.0",
                "comment": {
                    "title": "Best deal",
                    "text": "Must buy product at this price"
                }
            },
            {
                "name": "don,",
                "date": "Jul 10, 2021",
                "ratings": "4.3",
                "comment": {
                    "title": "Best product",
                    "text": "It seems everything is fine, and it has a good sound system, but I looked up why Windows was saying it needs to be Activated from the HP website, and they said once it is up to date that will go away. That changed nothing. It is up to date and it was just never activated. I don't like the small solid state drive, and it has a place for a second drive, so I am thinking about finding all the drivers and installing normal Windows 10."
                }
            },
            {
                "name": "AChipps,",
                "date": "Aug 07, 2020",
                "ratings": "3.5",
                "comment": {
                    "title": "Windows 10 Pro Unactivated",
                    "text": "It seems everything is fine, and it has a good sound system, but I looked up why Windows was saying it needs to be Activated from the HP website, and they said once it is up to date that will go away. That changed nothing. It is up to date and it was just never activated.\nI don't like the small solid state drive, and it has a place for a second drive, so I am thinking about finding all the drivers and installing normal Windows 10."
                }
            }
        ]
    },
    "status": true
}
```
