import { Component } from '@angular/core';
//import { Project, Options } from 'ng2-gantt';

import { Project, Options } from '../lib';

@Component({
    selector: 'demo-app',
    templateUrl: './demo-app.component.html'
})
export class DemoAppComponent {

    constructor() { }

    // Default options
    options: Options = {
        scale: {
            start: new Date(2017, 1, 1),
            end: new Date(2017, 1, 26)
        }
    };

    project: Project = {
        'id': 'dd10f0b6-b8a4-4b2d-a7df-b2c3d63b4a01',
        'name': 'Angular2 Gantt',
        'tasks': [
            {
                'id': '1',
                'name': 'Lorem ipsum dolor sit amet.',
                'resource': 'res1',
                'start': new Date('2017-02-01T00:00:00.0Z'),
                'end': new Date('2017-02-03T00:00:00.0Z'),
                'percentComplete': 10
            },
            {
                'id': '2',
                'name': 'Praesent molestie lobortis mi non tempor.',
                'resource': 'res1',
                'start': new Date('2017-02-03T00:00:00.0Z'),
                'end': new Date('2017-02-05T00:00:00.0Z'),
                'percentComplete': 25
            },
            {
                'id': '3',
                'name': 'Cras sollicitudin egestas velit sit amet aliquam.',
                'resource': 'res2',
                'start': new Date('2017-02-05T00:00:00.0Z'),
                'end': new Date('2017-02-06T00:00:00.0Z'),
                'percentComplete': 50
            },
            {
                'id': '4',
                'name': 'Donec ac augue est.',
                'resource': 'res2',
                'start': new Date('2017-02-06T00:00:00.0Z'),
                'end': new Date('2017-02-07T00:00:00.0Z'),
                'percentComplete': 75
            },
            {
                'id': '5',
                'name': 'Lorem ipsum dolor sit amet.',
                'resource': 'res1',
                'start': new Date('2017-02-07T00:00:00.0Z'),
                'end': new Date('2017-02-22T00:00:00.0Z'),
                'percentComplete': 100
            },
            {
                'id': '6',
                'name': 'Praesent molestie lobortis mi non tempor.',
                'resource': 'res1',
                'start': new Date('2017-02-22T00:00:00.0Z'),
                'end': new Date('2017-02-23T00:00:00.0Z')
            },
            {
                'id': '7',
                'name': 'Cras sollicitudin egestas velit sit amet aliquam.',
                'resource': 'res2',
                'start': new Date('2017-02-23T00:00:00.0Z'),
                'end': new Date('2017-02-24T00:00:00.0Z')
            },
            {
                'id': '8',
                'name': 'Donec ac augue est.',
                'resource': 'res2',
                'start': new Date('2017-02-24T00:00:00.0Z'),
                'end': new Date('2017-02-26T00:00:00.0Z')
            },
            {
                'id': '9',
                'name': 'Donec ac augue est.',
                'resource': 'res2',
                'start': new Date('2017-02-25T00:00:00.0Z'),
                'end': new Date('2017-02-26T00:00:00.0Z')
            },
        ]
    };

}
