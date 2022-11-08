import { Component, Input } from '@angular/core';
import { StatusCounts } from '../../models';

@Component({
    selector: 'app-active-issues',
    templateUrl: 'active-issues.component.html',
    styleUrls: ['active-issues.component.css']
})
export class ActiveIssuesComponent {

    @Input() public statusCounts: StatusCounts | undefined;

    constructor() { }
}
