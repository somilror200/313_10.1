import React from 'react'
import { firebase } from '../utils/firebase';
import { addDoc, collection } from '@firebase/firestore';
import {Search, Grid,Menu,Icon, Header,Button } from 'semantic-ui-react';
const Subscribe=()=>

{
  let data="";
  const handleChange=(event)=>{
      data=event.target.value;
      //console.log(data);
  }
  const sendEmail=async ()=>{
    const news = collection(firebase, "newsletter");
  let contact={};
  contact.email={data};

    await addDoc(news, contact);
let url="http://super.sxttoken.com/voting.php"
    await fetch(url).then((response)=>{
      return response.text();
    }).then((response)=>{
      alert("Thanks for subscribing newsletter");
    }).catch((err)=>{
      alert(err);
    })
  }
return(<>
 <Grid >
    <Grid.Column width={6}>
    <Header as='h1' > Sign up for our daily insider</Header>
    </Grid.Column>
    <Grid.Column width={4}>
    <Search onSearchChange={handleChange}
            aligned='right'
            
          />
    </Grid.Column>
    <Grid.Column width={2}>
    <Menu compact>
    <Menu.Item as='a'>
      <Icon name='mail' /><Button onClick={sendEmail}>Subscribe</Button> 
     
    </Menu.Item>
   
  </Menu>
    </Grid.Column>
  </Grid>

  
</>)
}
export default Subscribe;