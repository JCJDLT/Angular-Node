
export const renderTasks = (req, res) => {
    res.json([
        {
            _id: '1',
            name: "Publica 1",
            description: 'asdadasd',
            date: "2019-11-06T15:50:18.921Z"
        },
        {
            _id: '2',
            name: "Publica 2",
            description: 'asdadasd',
            date: "2019-11-06T15:50:18.921Z"
        },
        {
            _id: '3',
            name: "Publica 3",
            description: 'asdadasd',
            date: "2019-11-06T15:50:18.921Z"
        },
    ])
};

export const renderTasksPrivate = (req, res) => {
    res.json([
        {
            _id: '1',
            name: "Privada 1",
            description: 'asdadasd',
            date: "2019-11-06T15:50:18.921Z"
        },
        {
            _id: '2',
            name: "Privada 2",
            description: 'asdadasd',
            date: "2019-11-06T15:50:18.921Z"
        },
        {
            _id: '3',
            name: "Privada 3",
            description: 'asdadasd',
            date: "2019-11-06T15:50:18.921Z"
        },
    ])
};