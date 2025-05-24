

export default function home({ Connect, wallet, contract }) {
    return (
        <>    <div class="container">
            <header>
                <div class="logo">
                    <i class="fas fa-id-card"></i>
                    <span>Decentralized Identity (DID)</span>
                </div>
                <button type="button" id="walletButton" class="wallet-btn" onClick={Connect}>
                    <i class="fas fa-wallet"></i>
                    Connect Wallet
                </button>
            </header>

            <div class="main-content">
                <div class="panel">
                    <div class="panel-header">
                        <h2 class="panel-title">DID Records</h2>
                        <div class="sort-options">
                            <button class="sort-btn active" data-sort="name">By Name</button>
                            <button class="sort-btn" data-sort="date">By Date</button>
                        </div>
                    </div>

                    <div class="search-container">
                        <input type="text" id="searchInput" class="search-input" placeholder="Search by DID..."/>
                            <button class="search-btn" id="searchBtn">
                                <i class="fas fa-search"></i>
                            </button>
                    </div>

                    <div class="action-buttons">
                        <button class="action-btn add" id="addBtn">
                            <i class="fas fa-plus"></i> Add
                        </button>
                        <button class="action-btn remove" id="removeBtn">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                        <button class="action-btn update" id="updateBtn">
                            <i class="fas fa-edit"></i> Update
                        </button>
                    </div>

                    <div class="identity-list" id="identityList">
                        {/* <!-- Identity items will be dynamically inserted here --> */}
                        <div class="identity-card" data-id="did:example:123456">
                            <div class="identity-avatar">JD</div>
                            <div class="identity-info">
                                <div class="identity-name">John Doe</div>
                                <div class="identity-id">did:example:123456</div>
                            </div>
                            <div class="identity-actions">
                                <button class="identity-btn edit">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="identity-btn delete">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>

                        <div class="identity-card" data-id="did:example:789012">
                            <div class="identity-avatar">AS</div>
                            <div class="identity-info">
                                <div class="identity-name">Alice Smith</div>
                                <div class="identity-id">did:example:789012</div>
                            </div>
                            <div class="identity-actions">
                                <button class="identity-btn edit">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="identity-btn delete">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>

                        <div class="identity-card" data-id="did:example:345678">
                            <div class="identity-avatar">RJ</div>
                            <div class="identity-info">
                                <div class="identity-name">Robert Johnson</div>
                                <div class="identity-id">did:example:345678</div>
                            </div>
                            <div class="identity-actions">
                                <button class="identity-btn edit">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="identity-btn delete">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="panel">
                    <div class="panel-header">
                        <h2 class="panel-title">Recent Activity</h2>
                        <div class="activity-sort">
                            <button class="activity-sort-btn active" data-sort="recent">Recent</button>
                            <button class="activity-sort-btn" data-sort="old">Oldest</button>
                        </div>
                    </div>

                    <div class="activity-list" id="activityList">
                        {/* <!-- Activity items will be dynamically inserted here --> */}
                        <div class="activity-item">
                            <div class="activity-icon update">
                                <i class="fas fa-edit"></i>
                            </div>
                            <div class="activity-details">
                                <div class="activity-action">DID Record Updated</div>
                                <div class="activity-meta">did:example:123456</div>
                            </div>
                            <div class="activity-time">2 min ago</div>
                        </div>

                        <div class="activity-item">
                            <div class="activity-icon remove">
                                <i class="fas fa-trash"></i>
                            </div>
                            <div class="activity-details">
                                <div class="activity-action">DID Record Removed</div>
                                <div class="activity-meta">did:example:987654</div>
                            </div>
                            <div class="activity-time">15 min ago</div>
                        </div>

                        <div class="activity-item">
                            <div class="activity-icon add">
                                <i class="fas fa-plus"></i>
                            </div>
                            <div class="activity-details">
                                <div class="activity-action">New DID Record Added</div>
                                <div class="activity-meta">did:example:345678</div>
                            </div>
                            <div class="activity-time">32 min ago</div>
                        </div>

                        <div class="activity-item">
                            <div class="activity-icon">
                                <i class="fas fa-link"></i>
                            </div>
                            <div class="activity-details">
                                <div class="activity-action">DID Linked to Wallet</div>
                                <div class="activity-meta">0x7f...4a3b → did:example:123456</div>
                            </div>
                            <div class="activity-time">1 hour ago</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            {/* <!-- Add DID Modal --> */}
            <div class="modal" id="addModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Add New DID</h3>
                        <button class="modal-close" id="closeAddModal">&times;</button>
                    </div>
                    <form id="addForm">
                        <div class="form-group">
                            <label class="form-label">Full Name</label>
                            <input type="text" class="form-input" id="addName" required/>
                        </div>
                        <div class="form-group">
                            <label class="form-label">DID</label>
                            <input type="text" class="form-input" id="addDid" required/>
                        </div>
                        <div class="form-actions">
                            <button type="button" class="btn btn-secondary" id="cancelAdd">Cancel</button>
                            <button type="submit" class="btn btn-primary">Add DID</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* <!-- Update DID Modal --> */}
            <div class="modal" id="updateModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Update DID</h3>
                        <button class="modal-close" id="closeUpdateModal">&times;</button>
                    </div>
                    <form id="updateForm">
                        <div class="form-group">
                            <label class="form-label">Full Name</label>
                            <input type="text" class="form-input" id="updateName" required/>
                        </div>
                        <div class="form-group">
                            <label class="form-label">DID</label>
                            <input type="text" class="form-input" id="updateDid" readonly/>
                        </div>
                        <div class="form-actions">
                            <button type="button" class="btn btn-secondary" id="cancelUpdate">Cancel</button>
                            <button type="submit" class="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
