import { City } from "../City/City";
import linkIcon from '../../images/icons8-link-48.png'
import addIcon from '../../images/icons8-plus-math-30.png'
import correctIcon from '../../images/icons8-done-30.png';
import cancelIcon from '../../images/icons8-multiply-24.png';
import { useState } from "react";

const State = ({ stateData, removeCity, editModeData, updateEditModeData, editCity, updateAddModeData, addModeData, addNewCityToState }) => {
	const [newCityName, updateNewCityName] = useState('')

	const dataToReturn = (
		<div style={{ marginLeft: "15px" }}>
			<h3 style={{ fontWeight: "500", marginBottom: '0px' }}>
				This is the
				<a
					style={{ color: "inherit", textDecoration: "none" }}
					href={stateData.link}>
					<span style={{ fontWeight: "bold" }}>
						{' '}
						{stateData.name}
						<img style={{ width: '15px', verticalAlign: "middle" }} src={linkIcon} alt="linkPhoto" />
					</span>
				</a> state and their city name are listed below.
			</h3>
			<City
				cityData={stateData.city}
				removeCity={removeCity}
				stateId={stateData.id}
				editModeData={editModeData}
				updateEditModeData={updateEditModeData}
				editCity={editCity}
				updateAddModeData={updateAddModeData}
			/>
			<ul style={{ padding: '-10px 0 0 10px', listStyleType: 'square', margin: '0px' }}>
				<li>
					{
						addModeData.stateId === stateData.id && addModeData.isAdding
							? <>
								<input type="text" value={newCityName} onChange={(e) => { updateNewCityName(e.target.value) }} />
								<img
									style={{ marginLeft: '5px', width: '18px', verticalAlign: "middle", cursor: 'pointer' }}
									src={correctIcon}
									onClick={() => { addNewCityToState(stateData.id, newCityName); updateNewCityName('') }}
									alt="correctPhoto" />
								<img
									style={{ marginLeft: '5px', width: '18px', verticalAlign: "middle", cursor: 'pointer' }}
									src={cancelIcon}
									onClick={() => {
										updateAddModeData({
											stateId: stateData.id,
											isAdding: false
										});
										updateNewCityName('');
									}}
									alt="cancelPhoto" />
							</>
							: <>
								<img
									style={{ width: '18px', verticalAlign: "middle", cursor: 'pointer' }}
									src={addIcon}
									onClick={() => {
										updateAddModeData({
											stateId: stateData.id,
											isAdding: true
										});
										updateNewCityName('');
										updateEditModeData({ stateId: null, cityId: null, isEditable: false })
									}}
									alt="addPhoto" />
							</>}
				</li>
			</ul>
		</div>
	);
	return dataToReturn
};

export { State };
