import { Component } from '@angular/core';
import { Topic } from '../../models/topic.model';

@Component({
    selector: 'app-topic-detail',
    templateUrl: './topic-detail.component.html',
    styleUrls: ['./topic-detail.component.css']
})

export class TopicDetailComponent {
    topic: Topic = new Topic(
        'Telematica',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Esteban Sierra Munera',
        new Date
    );
}
