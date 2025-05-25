
import { useState, useEffect } from 'react';
export default function Home({ Connect, wallet, contract }) {
    const [shortAddress, setShortAddress] = useState('');
    useEffect(() => {
        if (wallet) {
            setShortAddress(`${wallet.slice(0, 5)}...${wallet.slice(-4)}`);
        }
    }, [wallet]);
    return (
        <>    <div class="container">
            <header>
                <div class="logo">
                    <i class="fas fa-id-card"></i>
                    <span>Decentralized Identity (DID)</span>
                </div>
                <button type="button" id="walletButton" class="wallet-btn" onClick={Connect}>
                    <i class="fas fa-wallet"></i>

                    {wallet ? shortAddress : 'Connect Wallet'}
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
                        <input type="text" id="searchInput" class="search-input" placeholder="Search by DID..." />
                        <button class="search-btn" id="searchBtn">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>

                    <div class="action-buttons">
                        <button type="button" class="action-btn add" id="addBtn" data-bs-toggle="modal" data-bs-target="#addModal">
                            <i class="fas fa-plus"></i> Add New DID
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
                                <button type="button" class="identity-btn edit" data-bs-toggle="modal" data-bs-target="#editModal">
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


            <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add New DID</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form class="row g-3 needs-validation" novalidate>
                                <div class="col-md-12 position-relative">
                                    <label  class="form-label">Name</label>
                                    <input type="text" class="form-control" id="validationTooltip01" value="Mark" required />
                                </div>
                                <div class="col-md-12 position-relative">
                                    <label  class="form-label">Email</label>
                                    <input type="email" class="form-control" id="validationTooltip01" value="Mark" required />
                                </div>
                                <div class="col-md-6 position-relative">
                                    <label  class="form-label">Ogranization</label>
                                    <input type="text" class="form-control" id="validationTooltip02" value="Otto" required />
                                </div>
                                <div class="col-md-6 position-relative">
                                    <label  class="form-label">Role</label>
                                        <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required />
                                </div>
                                <div class="col-md-12 position-relative">
                                    <label  class="form-label">Image</label>
                                    <input type="file" class="form-control-file" name="" id="" required/>
                                </div>

                                <div class="modal-footer">  
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Update DID Modal --> */}
            <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">editModal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
