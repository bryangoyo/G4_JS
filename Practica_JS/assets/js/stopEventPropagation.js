function stopEventPropagation(event) {
    console.log("Stopped event propagation " , event.key);

    event.stopPropagation();
}

export default stopEventPropagation;