'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button', { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

// class ClickMe extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//     }
//     clicked() {
//         this.setState({
//             count: this.state.count + 1
//         });
//     }
//     render() {
//         return ( <div onClick = {
//                 () => this.clicked()
//             } >
//             点我 { this.state.count }
//             次 </div>
//         );
//     }
// }


const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);