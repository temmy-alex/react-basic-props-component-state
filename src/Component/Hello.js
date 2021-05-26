// function Hello({text}){
//     return `Hello ${text}`
// }

// const Hello = function() {
//     return 'Hello!'
// }

// const Hello = () => {
//     return 'Hello'
// }

// const Hello = ({ text }) => {
//     return `Hello ${text}`
// }

const Hello = ({text}) => {
    return <div>Hello {text}</div>
}

Hello.defaultProps = {
    text: 'anonymous'
}

export default Hello;

