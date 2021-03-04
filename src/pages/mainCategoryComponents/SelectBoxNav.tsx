import './SelectBoxNav.css';
import React, { Component } from 'react';
import Select from 'react-select';
import CategoryNovelList from './CategoryNovelList';

interface OptionType {
  value: string;
  label: string;
}

interface State {
  selectedOption: OptionType;
  sortedData: {
    id: number;
    title: string;
    author: string;
    category: number;
    description: string;
    cloud: number;
    userLike: number;
    complete: boolean;
    thumbnail: string;
    createdAt: string;
    updatedAt: string;
  }[];
}

interface data {
  id: number;
  title: string;
  author: string;
  category: number;
  description: string;
  cloud: number;
  userLike: number;
  complete: boolean;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}
[];

const options: OptionType[] = [
  { value: 'updated', label: '업데이트순' },
  { value: 'title', label: '제목순' },
  { value: 'countCloud', label: '누적구름순' },
  { value: 'favorite', label: '관심순' },
];

interface CategorizedDataProps {
  categorizedData: {
    data: {
      id: number;
      title: string;
      author: string;
      category: number;
      description: string;
      cloud: number;
      userLike: number;
      complete: boolean;
      thumbnail: string;
      createdAt: string;
      updatedAt: string;
    }[];
  };
}

class SelectBoxNav extends Component<CategorizedDataProps, State> {
  constructor(props: CategorizedDataProps) {
    super(props);
    this.state = {
      selectedOption: options[0],
      sortedData: this.props.categorizedData.data,
    };
    this.handleChange = this.handleChange.bind(this);
    this.dataSortHandler = this.dataSortHandler.bind(this);
    this.handleSortWithUpdated = this.handleSortWithUpdated.bind(this);
    this.handleSortWithTitle = this.handleSortWithTitle.bind(this);
    this.handleSortWithCloud = this.handleSortWithCloud.bind(this);
    this.handleSortWithFavoriteData = this.handleSortWithFavoriteData.bind(
      this,
    );
  }

  // ? 첫 렌더시 업데이트 순으로 정렬
  componentDidMount() {
    this.dataSortHandler();
  }

  // ? user 선택시 해당에 맞춘 정렬
  componentDidUpdate() {
    this.dataSortHandler();
  }

  // ? selectBox 선택에 대한 state
  handleChange = (option: any): void => {
    this.setState({
      selectedOption: option,
    });
  };

  // ? Sort모음 함수 (실제 실행용)
  dataSortHandler = (): void => {
    if (this.state.selectedOption.value === 'favorite') {
      this.handleSortWithFavoriteData();
    } else if (this.state.selectedOption.value === 'updated') {
      this.handleSortWithUpdated();
    } else if (this.state.selectedOption.value === 'title') {
      this.handleSortWithTitle();
    } else if (this.state.selectedOption.value === 'countCloud') {
      this.handleSortWithCloud();
    } else {
      return;
    }
  };

  // ? update 기준 sort
  handleSortWithUpdated = (): void => {
    const temp = this.props.categorizedData.data;
    temp.sort((a: data, b: data) => {
      if (a.updatedAt < b.updatedAt) return 1;
      if (a.updatedAt > b.updatedAt) return -1;
      return 0;
    });
    this.setState({
      selectedOption: { value: 'wait', label: 'forNext' },
      sortedData: temp,
    });
    return;
  };
  // ? title 기준 sort
  handleSortWithTitle = (): void => {
    const temp = this.props.categorizedData.data;
    temp.sort((a: data, b: data) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
    this.setState({
      selectedOption: { value: 'wait', label: 'forNext' },
      sortedData: temp,
    });
    return;
  };
  // ? 누적 cloud 기준 sort
  handleSortWithCloud = (): void => {
    const temp = this.props.categorizedData.data;
    temp.sort((a: data, b: data) => {
      if (a.cloud < b.cloud) return 1;
      if (a.cloud > b.cloud) return -1;
      return 0;
    });
    this.setState({
      selectedOption: { value: 'wait', label: 'forNext' },
      sortedData: temp,
    });
    return;
  };
  // ? 관심 기준 sort
  handleSortWithFavoriteData = (): void => {
    const temp = this.props.categorizedData.data;
    temp.sort((a: data, b: data) => {
      if (a.userLike < b.userLike) return 1;
      if (a.userLike > b.userLike) return -1;
      return 0;
    });
    this.setState({
      selectedOption: { value: 'wait', label: 'forNext' },
      sortedData: temp,
    });
    return;
  };

  render() {
    return (
      <>
        <div className="selectBoxWrapper">
          <Select
            defaultValue={this.state.selectedOption}
            onChange={(option) => this.handleChange(option)}
            options={options}
          />
        </div>
        <div className="categoryNovelListWrapper">
          {this.state.sortedData.map((data: data) => (
            <CategoryNovelList key={data.id} data={data} />
          ))}
        </div>
      </>
    );
  }
}

export default SelectBoxNav;
