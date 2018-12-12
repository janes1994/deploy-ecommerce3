import {ThemeContext} from './theme-context';

class ThemedButton extends React.Component {
    render() {
        let props = this.props;
        let theme = this.context;
        return (
            <button
                {...props}
                style={{background: theme.background}}
            />
        )
    }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;