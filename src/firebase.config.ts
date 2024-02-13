import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBsmtJiBoejFRH-5xStBuJWK-p3an2AfVg",
  authDomain: "validation-task-88620.firebaseapp.com",
  databaseURL: "https://validation-task-88620-default-rtdb.firebaseio.com",
  projectId: "validation-task-88620",
  private_key_id: "8de4b9eb5038b52b42ddc0bccb4d2ff29d66b5cd",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC1JI8tE6rc7H8q\nQVCnAAdIoiaZtaw2jXGoTYluc7rSeFYg18Zy2VCWPFXPiYSdkymSUtOW4JDv2L5S\n2/6vEREVvJdmu+5riHV52E0yefwdli2hawXfRC0eV2b3Ipb/6H3GrqhAmYwFWET7\nTmXOgKxMLEFITeFpoK4DDDv2EVhdKjc9M46yiuQFv6igmoIfOIUCHpS5MdSngIJJ\nox8gF+hvMUdJRwzoIc7GdG2dT8OCnOqsAv2FsMWfWsq1pii4xuZUmU15ifoNxMF6\nkF+mcPS0Pl4ObJrnM/rngNvuuw3n+9jeqOBjhVWkCEauT70htF0tE1jIx5x9gY5J\nflUsLmgDAgMBAAECggEAD5fNkWJLh4f+LFuB/1Yzyk9XBk1KvUlwur2t8mmY7+w2\n8c3RQequEriv5FUgqtXTsspZd3fuUg801vokEtrjvxzEZa4QyIXvIuV5Q7qXds6K\nMAZ/82exgJaigOyj1fSj+xnm1uTA1mbyTTXC8sNF0arPldNKb6bKw+1mLfjxQ9es\ntlhzmxb3TsE5YfEsq0frrcW70pniTgLfNnQCAX+DeTl0eCNiLv3/6oCV+C+7cH+a\n/4qbebHSumVYTww+AtdzjiVcEuxVRtlIGHM9iAx+MkH/XuyLnMcV6rlpfQav4+jv\nlaUWu/urxk+Adn4Y/k1Nu4upwIRNmqb+R61qNb6yvQKBgQDt6/TnxZ89KiVj5v0X\nqIeZwag8Zs4uMpUZdFBDkjGz1+1DvfePqupyBZyQzyP/WRVSeU/YMpPMctRcitva\np1hx370pHKmqtrwWfg+yrIILnI0qwOJSHMW8bIe/yY74vfEO/1lXriMtZ3PvGNPz\nQd4TSF1E+DuAz/v/v2r7AWwcTwKBgQDC6CRP9OdeRAQVbwLJCI36zsWMSYIr09HU\nLtJfJnWOSto0zDr8h7Ioy57S2u+LP2wp5m/wsfZcM5P9NBcmYZfpkpvsFMwnLBS3\n4sff5mWbtjBSL6mdvxPAYi6Ia4AJKEfBELguYV7PaPgjfX+fp5mpfS+hrkjOmvUq\nxKCHPimIDQKBgCucfdbiPa8rg5ENbUUh6kE/40O3IIINWZFB5diM+rlZki9BqhhW\nnwTpjGpq3dFXlfX5MK6Tjs4CGnUgKu6okCjHd1gK3frh5hZFY0FAJ9JTDvlQQ+wD\nRCemyTdZjfCAeKhkHA9bZy1SckjYhzlm0Hs+X4Jd8iJJfYrCnqyF9Tg3AoGBAMAX\nJmKfDcA77IJrTCVxhuyfCNdAQ0iKlIw4MSGRt94rK29JsQDdg9rtA3TwTZHBSgrp\nj317B0DLnJi50+8B1ERhN8auoJ4itbCdkzu5yH50Sp9VViegAAllOlM9D4z24/EF\nV2BumpBz9cqUj0l8VtdSB7WjHSJyWhpye3uO6kOpAoGAEio0kJIIpxMtZ1W9gJQ2\nLMxVW2iAu8l/xH36truYgTmZd9TIpDHBqpx0n5DKlqRfv7uANCNCiMX3ZUosZ8li\nYQTVhpmvQ0VYDc9sTfN3pyVy+DfwECYm2RIN4MCqexJsdNjm8pgz94JQtWu2CzZX\nD0HAE9lidDbXRhWceaoY3d8=\n-----END PRIVATE KEY-----\n",

  storageBucket: "validation-task-88620.appspot.com",
  messagingSenderId: "822944672903",
  appId: "1:822944672903:web:753a63935977e6dff91c22",
  universe_domain: "googleapis.com"
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
// export const dataRef = firebase.database();
// export default firebase;
