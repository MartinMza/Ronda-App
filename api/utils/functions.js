const sortByDate = (arrOfMessages) => {
    return arrOfMessages.sort((a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt);
    });
}