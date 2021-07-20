import FancyBorder from "./FancyBorder";
function WelcomeDialog(props){
    return(
        <FancyBorder color="blue">
            <h1 className="dialog-title">
                Welcom
            </h1>
            <p className="dialog-message">Thank you for visiting our spacecraft!</p>
        </FancyBorder>
    )
}
export default WelcomeDialog