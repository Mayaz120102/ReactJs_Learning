import  { useState } from 'react';

const Userlist = () => {

    const [userList , setUserList] = useState(["mayaz", "arman", "abid", "ashraf", "showqi"])
    const handleRemove=(item)=>{
        console.log(item)

        const newUser = userList.filter((newitem)=>newitem != item)
        console.log(newUser)

        setUserList(newUser)
    }

    return (
        <div className='userlist'>
            use-list
            <div className='userlist_item' >
                {userList.map((item)=> <h2 onClick={()=>handleRemove(item)}>{item}</h2>)}
            </div>
        </div>
    );
};

export default Userlist;