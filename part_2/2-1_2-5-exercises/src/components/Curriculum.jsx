import Course from './Course'

const Curriculum = ({courses}) => {
    return(
        <div>
            {courses.map((course, index) =>
                <Course key={index} course={course} />
            )}
        </div>
    )
}
export default Curriculum