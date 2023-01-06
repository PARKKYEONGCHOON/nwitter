import { authService } from "fbase"; //eslint-disable-next-line
import { useNavigate } from "react-router-dom";
import { useState } from "react"; //eslint-disable-next-line

const Profile = ({ userObj, refreshUser }) => {

    const history = useNavigate();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    

    const onLogOutClick = () => {
        authService.signOut();
        history("/");
    };

    const onChange = (event) => {
        const {
            target: {value},
        } = event;
        setNewDisplayName(value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if(userObj.displayName !== newDisplayName)
        {
            await userObj.updateProfile({ displayName: newDisplayName });
            refreshUser();
        }
    };
    /*const getMyNweets = async () => {
        const nweets = await dbService.collection("nweets").where("creatorId","==",userObj.uid).orderBy("createdAt","asc").get();
        
        console.log(nweets.docs.map((doc) => doc.data()));
        
    };

    useEffect(() => {
        getMyNweets();
    },[]);*/

    return (
        <div className="container">
            <form onSubmit={onSubmit} className="profileForm">
                <input type="text" placeholder="Display Name" onChange={onChange} value={newDisplayName} autoFocus className="formInput" />
                <input type="submit" value="Udate Profile" className="formBtn" style={{ marginTop: 10 }}/>
            </form>
            <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>Log Out</span>
        </div>
    );

};
export default Profile;
