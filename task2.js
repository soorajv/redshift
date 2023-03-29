// Task 2
// a) Provide line by line analysis of the performance of the below code in terms of Big O notation, as well as the overall performance of the function.
// b) Write a new solution that has better performance, explaining why it has higher performance and if there are any other improvements possible.

const domains = {
  // Example to show data shape only.
  "one.com": { policy: "block" },
  "two.com": { policy: "none" },
  "three.com": { policy: "none" },
};
const getBlockPolicyState = (domains) => {
  const policyArr = [];
  const numDomains = Object.keys(domains).length;
  for (let i = 0; i < numDomains; i++) {
    policyArr.push(Object.entries(domains)[i][1].policy);
  }
  const oneDomain = policyArr.some((item) => item === "block");
  const allDomains = policyArr.every((item) => item === "block");
  return { oneDomain, allDomains };
};

/*
a) Line by line analysis of the performance of the code in terms of Big O notation:

The code defines an constant object called domains, which has a constant time complexity of O(1).

The code defines a function called getBlockPolicyState which takes  parameter as domains  and  time complexity of O(1).
The next code creates an empty array called policyArr which has a constant time complexity of O(1).
The code gets the number of domains using Object.keys(domains).length. 
This operation has a time complexity of O(n), where n is the number of keys in domains.
The next code then enters a for loop that iterates numDomains times. it has a time complexity of O(n).
Within the loop, the code pushes the policy value of each domain object into policyArr. 
Since this operation is performed n times, it has a time complexity of O(n).
The code checks if there is at least one domain with a policy of "block" using policyArr.some((item) => item === "block"). 
This operation has a time complexity of O(n), where n is the number of elements in policyArr.
The code checks if all domains have a policy of "block" using policyArr.every((item) => item === "block"). 
This operation also has a time complexity of O(n), where n is the number of elements in policyArr.
The function returns an object with two boolean values, which has a constant time complexity of O(1).
Overall time complexity of the function is O(n), 
where n is the number of domains in the domains object. This is because the function has to iterate through all the keys in domains
 to push the policy values into policyArr, and then iterate through policyArr 
 to check if there is at least one domain with a policy of "block" and if all domains have a policy of "block".
*/

const getBlockPolicyState1 = (domains) => {
  let oneDomain = false;
  let allDomains = true;
  for (const domain in domains) {
    if (domains[domain].policy === "block") {
      oneDomain = true;
    } else {
      allDomains = false;
    }
    if (oneDomain && !allDomains) {
      break;
    }
  }
  return { oneDomain, allDomains };
};
/*
The performance of this code is O(n),  it only iterates over the object once , e. It also checks whether 
both conditions are met while iterating over the object, which means it can break the loop early if it finds that at least one domain has a policy 
of "block" and not all domains have a policy of "block".
*/
