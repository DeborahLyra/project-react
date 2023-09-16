function Text({children, color}) {
    return (
        <div style= {{color: color, textTransform:'uppercase'}}>
           {children} 
        </div>
    )
}

export default Text;