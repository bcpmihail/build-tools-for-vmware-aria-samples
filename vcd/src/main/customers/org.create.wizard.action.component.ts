/*-
 * #%L
 * vcd
 * %%
 * Copyright (C) 2023 VMWARE
 * %%
 * Copyright 2023 VMware, Inc.
 * 
 * This product is licensed to you under the BSD 2 clause (the "License"). You may not use this product except in compliance with the License.
 * 
 * This product may include a number of subcomponents with separate copyright notices and license terms. Your use of these subcomponents is subject to the terms and conditions of the subcomponent's license, as noted in the LICENSE file.
 * #L%
 */
import { Component, OnDestroy } from "@angular/core";
import { WizardExtensionState, WizardExtensionWithValidationComponent } from "@vcd/sdk/common";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
	selector: "org-create-extension",
	templateUrl: "./org.create.wizard.action.component.html"
})
export class OrgCreateWizardExtensionPointComponent
	extends WizardExtensionWithValidationComponent<any, any, any>
	implements OnDestroy
{
	form: FormGroup;

	private stateSubject = new BehaviorSubject<{
		isValid: boolean;
	}>(null);
	private stateObs = this.stateSubject.asObservable();

	constructor(private fb: FormBuilder) {
		super();

		this.form = this.fb.group({
			example: new FormControl(null, Validators.required)
		});
		this.stateSubject.next({
			isValid: this.form.valid
		});
		this.setState();
	}

	ngOnDestroy() {
		console.log("[OrgCreateWizardExtensionPointComponent] Destroyed!");
	}

	performAction(payload: string, returnValue: string, error: any) {
		console.log("[Org Create Wizard Extension Point]", payload, returnValue, error);
	}

	setState() {
		this.form.statusChanges.subscribe(() => {
			this.stateSubject.next({
				isValid: this.form.valid
			});
		});
	}

	getState(): Observable<WizardExtensionState> {
		return this.stateObs;
	}
}
