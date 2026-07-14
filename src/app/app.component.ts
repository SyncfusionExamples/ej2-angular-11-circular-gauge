
import { Component, OnInit } from '@angular/core';
import { CircularGaugeModule, GaugeTooltipService } from '@syncfusion/ej2-angular-circulargauge';

@Component({
selector: 'app-container',
imports: [ CircularGaugeModule],
providers: [ GaugeTooltipService ],
template:
`<ejs-circulargauge id="circular-container">
    <e-axes>
        <e-axis>
            <e-pointers>
                <e-pointer value=35></e-pointer>
            </e-pointers>
        </e-axis>
    </e-axes>
</ejs-circulargauge>`
})
export class AppComponent implements OnInit {
ngOnInit(): void {
    // Initialize objects
}

}