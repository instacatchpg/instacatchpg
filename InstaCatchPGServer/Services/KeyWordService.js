const {
    isKeyWordExists
  } = require("../Reositories/keyWordRepository");
  const instagram = require('user-instagram');

  
  const getThroughtComments = async () => {
try{
    console.log('here')
    await instagram.authenticate('hacathon2022', 'tichnut_girls');
    // console.log(await instagram.authenticate('hacathon2022', 'tichnut_girls'));

    let postId='';
    // Fetching a user
    instagram.getUserData('hacathon2022').then(userData => {
      postId= userData.getMedias()[0].getShortcode();
      console.log( userData.getMedias()[0].getShortcode())
      // Do whatever you need to to with this data
    });

    instagram.getPostData(CcvIdUtqo90).then(postData=>{
      console.log(postData)
    });
}
catch(err){
console.log(err)
} };
  

  
  module.exports = {
    getThroughtComments
  };