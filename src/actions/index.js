import { RETRIEVED_NOTIFICATIONS } from './types'

export const retrievedNotifications = notifications => ({
    type: RETRIEVED_NOTIFICATIONS,
    notifications
})