function WrapperComponent({children}) {
    return (
        <div className="box">
            <h1>Mes alertes</h1>
            {children}
        </div>
    )
}

export default WrapperComponent;