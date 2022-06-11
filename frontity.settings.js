const settings = {
  "name": "wildfreewalking",
  "state": {
    "frontity": {
      "url": "https://freewalking.wildfreewalkingtours.com",
      "title": "Wild Free Walking Tours | Best Tour Guides in Town",
      "description": "Best free walking tour in Cusco. You will be provided with high standar tour with historical knowledge, tips and advices to make worth your stay in Cusco"
    }
  },
  "packages": [
    {
      "name": "freewalkingtour",
      "state": {
        "theme": {
          "menu": [
            ["About", "/"],
            ["Tours", "/tours/"],
            ["Guides", "/guides/"],
            ["Trekking/Hiking", "/trekking/"],
            ["Adventure", "/adventure/"],
            ["Bike Tours", "/biketours/"],
            ["Machu Picchu", "/machupicchu/"],
            ["FAQ's", "/faqs/"],        
            ["Contact", "/contact/"]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
          autoPrefetch: "hover"
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://freewalking.wildfreewalkingtours.com/wp-json/",

          "params": {
            per_page: 100,
          },

          "postTypes": [
            {
              type: "alltours",
              endpoint: "alltours",
              archive: "alltours",
            },

            {
              type: "hometours",
              endpoint: "hometours",
              archive: "hometours",
            }
          ],
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7"
  ]
};

export default settings;
