import React from 'react';
import * as SketchActions from '../../actions/SketchActions';
import InputSelectAudio from './InputSelectAudio';
import MidiLearn from './MidiLearn';

export default class ParamInputSelect extends React.Component {

	constructor(props) {
		super(props);

		this.handleTypeChange = this.handleTypeChange.bind(this);
	}

	// Only update select inputs when needed
	shouldComponentUpdate(newProps) {
		
		// Has an input value
		if (newProps.input) {

			// Had input value before
			if (this.props.input) {
				// Check to see if input ID has changed
				return this.props.input.id !== newProps.input.id;
			} else {
				// Didn't have input before
				return true;
			}
		
		// Doesn't now but did have before
		} else if (this.props.input) {

			return true

		} else {

			return false
			
		}
        
    }

	handleTypeChange(e) {
		const type = e.target.value;
		let id = false;
		let data;


	    switch(type) {

			case 'none':

				SketchActions.deleteSketchParamInput(this.props.sketchId, this.props.paramKey);
				break

			case 'midi':
				SketchActions.updateSketchParamInput(this.props.sketchId, this.props.paramKey, 'midi');
				break

			case 'audio':
				id = 'band_0';
				SketchActions.updateSketchParamInput(this.props.sketchId, this.props.paramKey, 'audio', id);
				break

			case 'lfo':
				id = 'sine';
				data = {waveType: 'sine', delta: 0};
				SketchActions.updateSketchParamInput(this.props.sketchId, this.props.paramKey, 'lfo', id, data);
				break

			default:
				console.error('Input type not recognised: '+type);
		}

	  
	}

	render() {

		const paramKey = this.props.paramKey;

		let inputType, inputId;
		let select;

		if (this.props.input) {
			inputType = this.props.input.type;
			inputId = this.props.input.id;

			switch (inputType) {
				case 'audio':
					select = <InputSelectAudio inputId={inputId} sketchId={this.props.sketchId} paramKey={this.props.paramKey} />;
					break

				case 'midi':
					select = <MidiLearn inputId={inputId} sketchId={this.props.sketchId} paramKey={this.props.paramKey} />;
					break

				case 'lfo':
					select = 'SINE'
					break
			}

		} else {
			inputType = 'none';
			inputId = '';
			select = '';
		}

		return (
		  
		  <div data-InputSelect>
	          <select value={inputType} onChange={this.handleTypeChange}>
	          		<option value="none">None</option>
	          		<option value="midi">MIDI</option>
	          		<option value="audio">Audio</option>
	          		<option value="lfo">LFO</option>
	          </select>

	          {select}
          </div>
		)
	}

}