

function FormLogin () 
{

    function submit(){
        
    }

    return(
        <div>
            <center>
            <form>
                <div className="form">
                <h1> Logh In </h1>
                <input id="userName" type="text" placeholder="User Name"/> <br/><br/>
                <input id="userName" type="text" placeholder="Password"/> <br/><br/>
                <button id="btnLog" onClick={submit()}> Log In </button>

                </div>
            </form>
            </center>
        </div>
        
        
    );
}

export default FormLogin;