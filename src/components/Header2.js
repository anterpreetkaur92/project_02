import React from 'react'
import logo from '../images/futureview.png'
import person from '../images/person.jpg'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



const MyButton = styled(Button)({
    color: 'gray', 
    padding: '10px 0px',
    '&:hover': {
        background: "white",
     },
    
     
  });
  const Item = styled(MenuItem)({
    color: 'gray', 
    padding: '0 30px',
    height:'50px',
    top:'0'

  });

  
const Header2 = () => {
    let history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div className='h-64 w-1366 border-b  flex'>
                <div className="p-2">
                    <img src={logo} alt="logoimage" width="160" height="50" onClick={() => { history.push("/") }} />
                </div>

                <div className='flex w-358 h-64'>

                    <button onClick={() => { history.push("/summary") }} className="w-73 h-64  text-gray-400 font-semibold ml-14 border-b hover:border-b-3 hover:border-yellow-600">Summary</button>


                    <button onClick={() => { history.push("/portfolio") }} className="text-gray-400 font-semibold w-66 h-64 ml-11 border-b hover:border-b-3 hover:border-yellow-600 ">Portfolio</button>


                    <button className="text-gray-400 font-semibold w-42 h-64 ml-11 border-b hover:border-b-3 hover:border-yellow-600">News</button>

                </div>

                <input className='bg-gray-100  w-298 h-40 ml-138 mt-13 rounded-sm space' placeholder="Search for a Stock" type='text' />


                <button className="bg-red-100 border border-yellow-600 w-200 h-40  font-semibold text-yellow-700 tracking-widest ml-5 mt-3">MAKE A TRADE</button>

                <div class="mt-3 ml-10 h-35 dropdown ">
                    <MyButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} >
                        Menu
                    </MyButton>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                        
                    >
                    <Typography component="div">
                    <Box fontWeight="fontWeightMedium"><Item  onClick={handleClose}>Account</Item></Box>
                    <Box fontWeight="fontWeightRegular"><Item  onClick={handleClose}>Transactions</Item></Box>
                    <Box fontWeight="fontWeightRegular" ><Item  onClick={handleClose}>Settings</Item></Box>
                    <Box fontWeight="fontWeightRegular"><Item   onClick={handleClose}>Logout</Item></Box>
                    </Typography>
                    </Menu>
                </div>
                <div class="ml-2 my-2 rounded-full overflow-hidden h-11 w-11 mt-3.5">
                    <img src={person}></img>
                </div>

            </div>
        </div>
    )
}

export default Header2
