import editIcon from '../../images/icons8-pencil-48.png';
import deleteIcon from '../../images/icons8-remove-32.png';
import correctIcon from '../../images/icons8-done-30.png';
import cancelIcon from '../../images/icons8-multiply-24.png';
import { useEffect, useState } from 'react';

const City = ({ cityData, stateId, removeCity, editModeData, updateEditModeData, editCity, updateAddModeData }) => {
	let cityNameToBeCopied = ''
	const sortedArray = cityData.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
	const { stateId: editStateId, cityId: editCityId, isEditable } = editModeData;
	if (editCityId && stateId === editStateId) {
		cityNameToBeCopied = cityData.find(c => c.id === editCityId);
		cityNameToBeCopied = cityNameToBeCopied?.name
	}
	const [cityName, updateCityName] = useState('')

	useEffect(() => updateCityName(cityNameToBeCopied), [cityNameToBeCopied])

	return (<ul style={{ padding: '-10px 0 0 10px', listStyleType: 'square', margin: '0px' }}>
		{sortedArray.map(city =>
			<li style={{ fontWeight: 'bolder' }}
				key={city.id}>
				{
					isEditable && editStateId === stateId && editCityId === city.id
						? <>
							<input type="text" value={cityName} onChange={(e) => updateCityName(e.target.value)} />
							<img
								style={{ marginLeft: '5px', width: '18px', verticalAlign: "middle", cursor: 'pointer' }}
								src={correctIcon}
								onClick={() => {
									editCity(stateId, city.id, cityName);
								}}
								alt="correctPhoto" />
							<img
								style={{ marginLeft: '5px', width: '18px', verticalAlign: "middle", cursor: 'pointer' }}
								src={cancelIcon}
								onClick={() => {
									updateEditModeData({ stateId: stateId, cityId: city.id, isEditable: false });
								}}
								alt="cancelPhoto" />
						</>
						: <>
							{city.name}
							<img
								style={{ marginLeft: '5px', width: '18px', verticalAlign: "middle", cursor: 'pointer' }}
								src={editIcon}
								onClick={() => {
									updateEditModeData({ stateId: stateId, cityId: city.id, isEditable: true });
									updateAddModeData({
										stateId: null,
										isAdding: false
									})
								}}
								alt="editPhoto" />
							<img
								style={{ marginLeft: '5px', width: '18px', verticalAlign: "middle", cursor: 'pointer' }}
								src={deleteIcon}
								onClick={() => {
									removeCity(stateId, city.id);
									updateAddModeData({
										stateId: null,
										isAdding: false
									})
								}}
								alt="deletePhoto" />
						</>
				}
			</li>)}
	</ul>)
}
export { City }