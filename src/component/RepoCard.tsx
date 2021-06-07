import React, { useEffect, useState } from "react";
import { Avatar, Divider } from "antd";
import axios from "axios";


type UserData = {
  name: string;
  avatar_url: string;
};
type ContributorsData = {
  login: string;
  avatar_url: string;
};
type Repo = {
  name: string;
  html_url: string;
  description: string;
  owner: UserData;
  contributors_url: string;
};

interface RepoData {
  Repo: Repo;
}

function RepoCard(props: RepoData) {
  const [data, setData] = useState<ContributorsData[]>([]);
  useEffect(() => {
    const fetchMyWorkData = async () => {
      await axios
        .get(props?.Repo.contributors_url)
        .then((res: any) => {
          const data = res.data;
          setData(data);
        })
    };
    fetchMyWorkData();
  }, [props?.Repo.contributors_url]);
  return (
    <>
        <div className="bg-gray-600 p-4 rounded-xl shadow-md text-white">
          <a href={props?.Repo?.html_url} target="_blank" rel="noreferrer">
            <p className="text-xl sm:text-lg font-semibold text-green-500 text-bold">
              {props?.Repo.name}
            </p>
          </a>
          <Divider style={{ color: "white", borderColor: "white" }}>
            contributors
          </Divider>
          <p className="text-base font-semibold">
            {data ? (
              <>
                {data?.map((item: any) => {
                  return (
                    <Avatar src={item?.avatar_url} alt={item?.avatar_url} />
                  );
                })}
              </>
            ) : (
              <span>No data!!!</span>
            )}
          </p>
        </div>
     
    </>
  );
}

export default RepoCard;
