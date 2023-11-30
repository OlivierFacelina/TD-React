function NotificationButton({displayCloseBtn = true, handleClick}) {
    return displayCloseBtn 
    ? <button onClick={handleClick} className="delete"></button> 
    : null
}

export default NotificationButton;