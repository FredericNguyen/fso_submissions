import Header from './components/Header'
import Content from './components/Content'

const Content = ({course}) => {
    <div id={course.id}>
        <Header name = {name} />
        <Content parts = {course.parts} />
    </div>

}
export default Course