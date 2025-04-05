const settings = {
  "name": "wildfreewalking",
  "state": {
    "frontity": {
      "url": "https://walkingtours2024.wildfreewalkingtours.com",
      "title": "Free Walking Tour Cusco - San Pedro Market",
      "description": "Wild free walking tour Cusco is operated by a 100% local company, we have been working in Cusco for 3 years now, and We are recognize as one of the best Free Walking Tours in Cusco.."
    }
  },
  "packages": [
    {
      "name": "freewalkingtour",
      "state": {
        "theme": {
          "menu": [
            ["About", "/"],
            ["1 Day Tours", "/tours/"],
            ["Guides", "/guides/"],
            ["Trekking/Hiking", "/trekking/"],
            ["Adventure", "/adventure/"],
            ["Machu Picchu", "/machupicchu/"],
            ["Amazon Tours", "/amazon/"],
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
          "api": "https://walkingtours2024.wildfreewalkingtours.com//wp-json/",

          "params": {
            per_page: 100,
          },

          "postTypes": [
            {
              type: "adventuretours",
              endpoint: "adventuretours",
              archive: "adventuretours",
            },
            {
              type: "alltours",
              endpoint: "alltours",
              archive: "alltours",
            },

            {
              type: "mptours",
              endpoint: "mptours",
              archive: "mptours",
            },

            {
              type: "hikingtours",
              endpoint: "hikingtours",
              archive: "hikingtours",
            },

            {
              type: "amazontours",
              endpoint: "amazontours",
              archive: "amazontours",
            },
          ],

          "taxonomies": [
            {
              taxonomy: "category",
              endpoint: "categories",
              postTypeEndpoint: "alltours",
            },
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7"
  ]
};

export default settings;
