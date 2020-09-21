import React, { useEffect, useState } from 'react';
import { useAppData } from '../../../hooks/useAppData';
import { useRouterService } from '../../../hooks/useRouterService';
import { useSearchState } from '../../../hooks/useSearchState';

import { AppPageHeader } from '../AppPage/AppPageHeader';
import { AppPageTitle } from '../AppPage/AppPageTitle';
import { SearchResult } from './SearchResult';
import { SearchInput } from './SearchInput';

import styles from './Search.module.scss';
import { IconType } from '../shared/TypeIcon';
import { AppPageSection } from '../AppPage/AppPageSection';
import { AppPageSectionHeading } from '../AppPage/AppPageSectionHeading';

const Search = (): JSX.Element => {
	const { router } = useRouterService();

	const {
		field,
		searchValue,
		handleField,
		handleSearchValue,
		setField,
		setSearchValue
	} = useSearchState();
	const { appData, userId } = useAppData();
	const [ results, setResults ] = useState<any[]>([]);

	useEffect(() => {
		if (router.query && router.query.field && router.query.searchValue) {
			setField(router.query.field as string);
			setSearchValue(router.query.searchValue as string);
		}
	}, []);

	const handleSearch = () => {
		if (searchValue.trim() === '') {
			return setResults([]);
		}

		const data = [
			...appData.projects,
			...appData.tasks,
			...appData.notes
		];

		const filteredData = data.filter(item => {
			if (!item[field]) {
				return false;
			}

			return item[field]
				.toLowerCase()
				.includes(searchValue.toLowerCase());
		});

		setResults(filteredData);
		router.pushUnique(`search?field=${field}&searchValue=${searchValue}`);
	};

	return (
		<React.Fragment>
			<AppPageHeader>
				<AppPageTitle
					heading='Enter a Search Value'
					subheading='Search'
					subheadingType={IconType.generic}
				/>
			</AppPageHeader>
			<AppPageSection>
				<div className={styles.input}>
					<SearchInput
						handleSearch={handleSearch}
						field={field}
						setField={handleField}
						searchValue={searchValue}
						setSearchValue={handleSearchValue}
					/>
				</div>
			</AppPageSection>
			<AppPageSection>
				<AppPageSectionHeading title='Search Results:' />
				<div className={styles.results_container}>
					{results.length > 0 &&
						results.map((result, i) => {
							return (
								<SearchResult
									result={result}
									userId={userId}
									key={i}
								/>
							);
						})}
					{results.length === 0 && <div>( No results found )</div>}
				</div>
			</AppPageSection>
		</React.Fragment>
	);
};

export { Search };
