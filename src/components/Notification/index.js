import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { retrievedNotifications } from '../../actions'

class Notification extends React.Component {
    componentDidMount () {
        axios.get("http://webinar-4.erdemkeren.com/api/v1/notification?username=webinar")
        .then(response => {
            console.log(response)
            this.props.dispatch(retrievedNotifications(response.data))
        })
    }

    render() {
        const { notifications } = this.props
        console.log(notifications)

        return (
            <div>Notifications</div>
        )
    }
}

const mapStateToProps = state => ({
    notifications: state.notifications
})

export default connect(mapStateToProps)(Notification)