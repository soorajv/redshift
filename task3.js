// Task 3
// Analyse the following code, explain what it is doing, what problems you can find / suggestions for improvement.

import expensiveOperation from "./libs";

const input = {
  // Example to provide data shape only
  request: {
    url: "/api/domain_analyzer",
    method: "POST",
    body: {
      domains: [
        "microsoft.com",
        "outlook.com",
        "three.com",
        "four.com",
        "redsift.com",
      ],
    },
  },
  db_data: [
    {
      domains: [
        {
          key: "b25lLmNvbQ==",
          value: '{"dom":"microsoft.com","dt":"10-11-2021","org":"ms"}',
        },
        {
          key: "Zml2ZS5jb20=",
          value: '{"dom":"redsift.com","dt":"12-11-2021","org":"redsift"}',
        },
      ],
    },
    {
      users: [
        {
          key: "b25lLmNvbQ==/dHdvLmNvbQ==",
          value: '{"u":"jane@microsoft.com"}',
        },
        { key: "Zml2ZS5jb20=/dHdvLmNvbQ==", value: '{"u":"john@redsift.com"}' },
      ],
    },
  ],
};

const PREVIOUS = {};

const compute = async (input, apiResponse) => {
  const { url, body } = input.request;
  if (url === "/api/domain_analyzer") {
    const r = {};
    body.domains.forEach(async (d) => {
      const db_d = input.db_data.find((d) => "domains" in d);
      const db_dd = {};
      db_d["domains"].forEach((i) => {
        const v = JSON.parse(i.value);
        db_dd[v["dom"]] = v;
      });
      if (PREVIOUS[d]) {
        r[d] = PREVIOUS[d];
      } else {
        r[d] = await expensiveOperation(d, db_dd[d]);
        PREVIOUS[d] = r[d];
      }
    });
    return apiResponse(204, r);
  }
};

/*
This code defines a function called compute that does some work on data provided in an input object. 
The input object contains some information about an API request,
 and some data from a database. The compute function does some processing on the database data 
 and then calls another function called expensiveOperation for each domain in the API request.
  If the result for a domain has already been calculated before, the function uses the previous result
   instead of calling expensiveOperation again. Finally, the function returns a response with some data.

One problem with the code is that it uses an asynchronous function with forEach,
 which can lead to unexpected behavior. Another issue is that the expensiveOperation function is
  being called multiple times with the same arguments for the same domain, which is inefficient.
  Promise.all() would be a good improvement to the code. Instead of calling expensiveOperation for each domain name separately, 
  we could create an array of promises, each of which calls expensiveOperation with a single domain name and its corresponding data. 
  We could then use Promise.all() to wait for all of the promises to resolve before returning the results.
*/
