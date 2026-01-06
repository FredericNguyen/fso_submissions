const Total = ({parts}) => {
    const sum = parts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.exercises, 0,
    );
    return(
        <p><b>Total of {sum} exercises</b></p>
    )
}

export default Total