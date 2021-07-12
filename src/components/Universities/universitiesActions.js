import { searchUniversityByNameAPI } from '../../app/api';

export const searchUniversity = name =>
    (dispatch) => {
        searchUniversityByNameAPI(name).then(res => {
        dispatch(updateUniversityList(res));
    });
};

export const updateUniversityList = res => {
    return {
        type: 'UPDATE_UNIVERSITY_LIST',
        universities: res
    };
};