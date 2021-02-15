import googleApi from "./googleApi";

class MessageUtil {
    /**
     * @param labelIds - array of label IDs
     * @returns a Promise that resolves with a list of the most recent messages that contain at least one of the labels
     * in `labelIds`. If `labelIds` is empty then the resulting array will contain the most recent messages.
     */
    getMessagesForLabels(labelIds) {
        //Placeholder implementation
        return googleApi.getMessages();
    }

    /**
     * Takes two sorted lists of messages and merges them together. The input and output arrays are sorted from the
     * newest message to the oldest message. If both input arrays contain the same message then the resulting array will
     * only contain one copy of it.
     *
     * @example
     * let messagesA = [
     *   {id: 'a', internalDate: '1527831809002', ...},
     *   {id: 'b', internalDate: '1527831809001', ...}
     * ];
     *
     * let messagesB = [
     *   {id: 'c', internalDate: '1527831809003', ...},
     *   {id: 'b', internalDate: '1527831809001', ...}
     * ];
     *
     * _combineSortedMessages(messagesA, messagesB) === [
     *   {id: 'c', internalDate: '1527831809003', ...},
     *   {id: 'a', internalDate: '1527831809002', ...},
     *   {id: 'b', internalDate: '1527831809001', ...}
     * ]
     */
    _combineSortedMessages(messagesA, messagesB) {
        // Placeholder implementation
        return messagesA.concat(messagesB);
    }
}

export default new MessageUtil();