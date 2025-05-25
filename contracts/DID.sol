// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract DIDCard is
    Initializable,
    ERC721URIStorageUpgradeable,
    OwnableUpgradeable,
    UUPSUpgradeable
{
    uint256 public tokenId;

    struct Employee {
        string name;
        string image_url;
        string role;
        string org;
        string email;
        bool isActive;
        uint256 Id;
    }

    mapping(uint256 => Employee) public employee;

    function initialize() public initializer {
        tokenId = 0;
        __ERC721_init("DIDCard", "DID");
        __ERC721URIStorage_init();
        __Ownable_init(msg.sender); // ✅ FIXED: no msg.sender here
        __UUPSUpgradeable_init();
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}
    event mintLog(
        address indexed sender,
        string message,
        string name,
        uint id,
        uint timestamp
    );
    event deleteLog(
        address indexed sender,
        string message,
        string name,
        uint id,
        uint timestamp
    );
    event updateLog(
        address indexed sender,
        string message,
        string name,
        uint id,
        uint timestamp
    );

    function Mint(
        string memory name,
        string memory image_url,
        string memory role,
        string memory org,
        string memory email;
        string memory metadataURI
    ) public virtual onlyOwner {
        tokenId++;
        employee[tokenId] = Employee({
            name: name,
            image_url: image_url,
            role: role,
            org: org,
            email: email,
            isActive: true,
            Id: tokenId
        });

        _safeMint(owner(), tokenId);
        _setTokenURI(tokenId, metadataURI);
        emit mintLog(
            msg.sender,
            "DID Created for Employee",
            name,
            tokenId,
            block.timestamp
        );
    }

    function remove(uint256 _tokenId) public virtual onlyOwner {
        _burn(_tokenId);
        emit deleteLog(
            msg.sender,
            "DID Removed for Employee",
            employee[_tokenId].name,
            tokenId,
            block.timestamp
        );
        delete employee[_tokenId];
    }

    function update(
        string memory name,
        string memory image_url,
        string memory role,
        string memory org,
        bool isActive,
        string email;
        string memory metadataURI,
        uint256 _tokenId
    ) public virtual onlyOwner {
        Employee storage user = employee[_tokenId];

        user.name = name;
        user.image_url = image_url;
        user.role = role;
        user.org = org;
        user.email = email;
        user.isActive = isActive;

        _setTokenURI(_tokenId, metadataURI);
        emit updateLog(
            msg.sender,
            "DID Updated for Employee",
            name,
            tokenId,
            block.timestamp
        );
    }
}
