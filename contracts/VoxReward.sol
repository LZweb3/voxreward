
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract VoxReward {
    struct Poll {
        string question;
        string[] options;
    }

    mapping(uint256 => Poll) public polls;
    uint256 public pollCount;

    function createPoll(string memory question, string[] memory options) public {
        polls[pollCount].question = question;
        polls[pollCount].options = options;
        pollCount++;
    }

    function getPoll(uint256 id) public view returns (string memory, string[] memory) {
        return (polls[id].question, polls[id].options);
    }
}
